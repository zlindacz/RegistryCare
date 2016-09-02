class UserCategory < ActiveRecord::Base
  validates :user, :category, presence: true
  validates :category_id, uniqueness: { scope: :user_id }
  
  belongs_to :user
  belongs_to :category
end
