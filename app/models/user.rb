class User < ActiveRecord::Base
  validates :username, :organization_name, :email, :address1, :address2, :city, :state, :zipcode, :photo, :description, :password_digest, :session_token, presence: true
  validates :name, :organization_name, :email, :password_digest, :session_token, uniqueness: true
  validates :zipcode, length: { is: 5 }
  validates :password, length: { minimum: 6, allow_nil: true }

  after_initialize :ensure_session_token

  attr_reader :password

  def password= password
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(name, password)
    user = User.find_by(name: name)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(32)
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(32)
  end
end
