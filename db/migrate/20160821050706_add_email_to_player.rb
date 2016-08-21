class AddEmailToPlayer < ActiveRecord::Migration[5.0]
  def change
    add_column :players, :email, :string
    add_column :players, :ban, :boolean
  end
end
