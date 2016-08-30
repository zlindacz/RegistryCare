class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :address, null: false
      t.string :photo, null: false, default: "heart.png"
      t.text :description, null: false
      t.string :password_digest, null: false
      t.string :session_token, null:false
      t.timestamps null: false
    end

    add_index :users, [:name, :email], unique: true
  end
end
