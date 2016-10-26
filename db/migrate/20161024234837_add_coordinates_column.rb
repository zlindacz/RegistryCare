class AddCoordinatesColumn < ActiveRecord::Migration
  def change
    add_column :users, :coordinates, :string, array: true, default: '{}'
  end
end
