class User < ActiveRecord::Base
  include Geocoder::Model::Mongoid

  validates :username, :organization_name, :email, :address1, :city, :state, :zipcode, :photo, :description, :password_digest, :session_token, presence: true
  validates :username, :organization_name, :email, :password_digest, :session_token, uniqueness: true
  validates :zipcode, length: { is: 5 }
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :user_categories, dependent: :destroy, inverse_of: :user
  has_many :categories, through: :user_categories
  has_many :user_items, dependent: :destroy, inverse_of: :user
  has_many :items, through: :user_items
  has_many :pledges, dependent: :destroy, inverse_of: :user
  has_many :other_users, through: :pledges

  geocoded_by :full_street_address, skip_index: true
  after_initialize :ensure_session_token
  after_validation :geocode, :set_lat_lng

  attr_reader :password

  def category
    self.categories.first
  end

  def self.search(query)
    User.joins(:user_categories, :categories, :user_items, :items).where("categories.name ILIKE ? OR organization_name ILIKE ? OR items.name ILIKE ?", "%#{query}%", "%#{query}%", "%#{query}%").distinct
  end

  def password= password
    @password = password
    self.password_digest = BCrypt::Password.create(@password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(32)
    self.save!
    self.session_token
  end

  def full_street_address
    self.address1 + ' ' + self.address2 + ' ' + self.city + ' ' + self.state + ' ' + self.zipcode
  end

  def set_lat_lng
    # MongoDB requires that coordinates be stored in [lon,lat] order as per the GeoJSON spec
    self.latitude = self.coordinates[1]
    self.longitude = self.coordinates[0]
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(32)
  end

end
