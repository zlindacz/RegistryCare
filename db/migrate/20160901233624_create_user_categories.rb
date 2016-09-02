class CreateUserCategories < ActiveRecord::Migration
  def change
    create_table :user_categories do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false
      t.timestamps null: false
    end
  end
end
