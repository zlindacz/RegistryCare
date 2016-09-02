class AllowNullInUserColumnAddress2 < ActiveRecord::Migration
  def change
    change_column :users, :address2, :string, :null => true
  end
end
