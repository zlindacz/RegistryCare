class UserItem < ActiveRecord::Base
  validates :user, :item, presence: true
  validates :item_id, uniqueness: { scope: :user_id }
  
  belongs_to :user
  belongs_to :item
end
