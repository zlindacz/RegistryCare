class Category < ActiveRecord::Base
  has_many :user_categories, dependent: :destroy, inverse_of: :category
  has_many :users, through: :user_categories
end
