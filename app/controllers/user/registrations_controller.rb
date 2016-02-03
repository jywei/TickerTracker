class User::RegistrationsController < Devise::RegistrationsController

  before_filter :configure_permitted_parameters

  protected

  def configure_permitted_parameters
    devise_parameter_for(:sign_up).push(:first_name, :last_name)
    devise_parameter_for(:account_update).push(:first_name, :last_name)
  end

end
