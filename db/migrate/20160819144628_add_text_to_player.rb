class AddTextToPlayer < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :note, :text
  end
end
