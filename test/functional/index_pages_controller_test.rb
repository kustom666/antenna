require 'test_helper'

class IndexPagesControllerTest < ActionController::TestCase
  setup do
    @index_page = index_pages(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:index_pages)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create index_page" do
    assert_difference('IndexPage.count') do
      post :create, index_page: { body: @index_page.body, title: @index_page.title }
    end

    assert_redirected_to index_page_path(assigns(:index_page))
  end

  test "should show index_page" do
    get :show, id: @index_page
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @index_page
    assert_response :success
  end

  test "should update index_page" do
    put :update, id: @index_page, index_page: { body: @index_page.body, title: @index_page.title }
    assert_redirected_to index_page_path(assigns(:index_page))
  end

  test "should destroy index_page" do
    assert_difference('IndexPage.count', -1) do
      delete :destroy, id: @index_page
    end

    assert_redirected_to index_pages_path
  end
end
