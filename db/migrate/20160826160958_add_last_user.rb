class AddLastUser < ActiveRecord::Migration[5.0]
  def change
     add_column :players, :last_open_id, :integer
  end
end
