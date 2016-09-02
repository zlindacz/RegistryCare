class CreateUserItems < ActiveRecord::Migration
  def change
    create_table :user_items do |t|
      t.integer :user_id, null: false
      t.integer :item_id, null: false
      t.timestamps null: false
    end
  end
end
