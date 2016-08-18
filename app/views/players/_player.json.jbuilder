json.extract! player, :id, :username, :password, :type, :open, :user_id, :updated_at, :created_at, :updated_at
json.url player_url(player, format: :json)