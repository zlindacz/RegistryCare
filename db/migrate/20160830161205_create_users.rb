class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :organization_name, null: false
      t.string :username, null: false
      t.string :email, null: false
      t.string :address1, null: false
      t.string :address2, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zipcode, null: false, limit: 5
      t.string :photo, null: false, default: "heart.png"
      t.text :description, null: false
      t.string :password_digest, null: false, limit: 5
      t.string :session_token, null:false
      t.timestamps null: false
    end

    add_index :users, [:username, :email], unique: true
  end
end
