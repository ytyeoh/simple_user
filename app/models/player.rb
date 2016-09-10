class Player < ApplicationRecord
  belongs_to :user
  belongs_to :last_open, class_name: "User"

  enum account: { gmail: 1, ptc: 2 }

end
