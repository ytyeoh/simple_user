class Player < ApplicationRecord
  belongs_to :user

  enum account: { gmail: 1, ptc: 2 }

end
