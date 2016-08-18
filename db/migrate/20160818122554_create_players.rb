class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :username
      t.string :password
      t.integer :account
      t.boolean :open
      t.integer :user_id

      t.timestamps
    end
  end
end
