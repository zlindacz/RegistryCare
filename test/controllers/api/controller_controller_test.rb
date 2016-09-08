require 'test_helper'

class Api::ControllerControllerTest < ActionController::TestCase
  test "should get pledges" do
    get :pledges
    assert_response :success
  end

end
