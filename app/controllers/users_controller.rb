class UsersController < ApplicationController
  before_action :set_user, only: [:edit, :update]
  def index
    @users = User.all
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        @user.add_role :client
        format.html { redirect_to users_path, notice: 'User was successfully updated.' }
        format.json { render :show, status: :ok, location: @player }
      else
        format.html { render :edit }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end

  end

  def edit

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:confirm)
    end
end
