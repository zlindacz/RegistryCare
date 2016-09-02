class CreatePledges < ActiveRecord::Migration
  def change
    create_table :pledges do |t|
      t.integer :user_id, null: false
      t.integer :other_user_id, null: false
      t.timestamps null: false
    end
  end
end
