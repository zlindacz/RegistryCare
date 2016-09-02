class AddIndexesToForeignKeysInUserItemsAndUserCategoriesJoinTables < ActiveRecord::Migration
  def change
    add_index :user_items, [:user_id, :item_id]
    add_index :user_categories, [:user_id, :category_id]
  end
end
