class UserCategory < ActiveRecord::Base
  validates :user, :category, presence: true
  validates :category_id, uniqueness: { scope: :user_id }

  belongs_to :user, inverse_of: :user_category
  belongs_to :category, inverse_of: :user_categories
end
