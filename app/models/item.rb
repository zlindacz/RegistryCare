class Item < ActiveRecord::Base
  has_many :user_items, dependent: :destroy, inverse_of: :item
  has_many :users, through: :user_items
end
