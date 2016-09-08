class FixDefaultImagePath < ActiveRecord::Migration
  def up
    change_column :users, :photo, :string, default: "assets/heart.png"
  end

  def down
    change_column :users, :photo, :string, default: "heart.png"
  end
end
