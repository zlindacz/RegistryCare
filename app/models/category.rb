class Category < ActiveRecord::Base
  has_many :user_categories, dependent: :destroy, inverse_of: :categories
  has_many :users, through: :user_categories, inverse_of: :category
end
