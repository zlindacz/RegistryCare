class UserItem < ActiveRecord::Base
  validates :user, :item, presence: true
  validates :item_id, uniqueness: { scope: :user_id }

  belongs_to :user, inverse_of: :user_items
  belongs_to :item, inverse_of: :user_items
end
