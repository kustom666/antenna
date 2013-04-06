require 'test_helper'

class EmittersControllerTest < ActionController::TestCase
  setup do
    @emitter = emitters(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:emitters)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create emitter" do
    assert_difference('Emitter.count') do
      post :create, emitter: { title: @emitter.title }
    end

    assert_redirected_to emitter_path(assigns(:emitter))
  end

  test "should show emitter" do
    get :show, id: @emitter
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @emitter
    assert_response :success
  end

  test "should update emitter" do
    put :update, id: @emitter, emitter: { title: @emitter.title }
    assert_redirected_to emitter_path(assigns(:emitter))
  end

  test "should destroy emitter" do
    assert_difference('Emitter.count', -1) do
      delete :destroy, id: @emitter
    end

    assert_redirected_to emitters_path
  end
end
