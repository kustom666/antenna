class IndexPagesController < ApplicationController
  # GET /index_pages
  # GET /index_pages.json
  def index
    @index_pages = IndexPage.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @index_pages }
    end
  end

  # GET /index_pages/1
  # GET /index_pages/1.json
  def show
    @index_page = IndexPage.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @index_page }
    end
  end

  # GET /index_pages/new
  # GET /index_pages/new.json
  def new
    @index_page = IndexPage.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @index_page }
    end
  end

  # GET /index_pages/1/edit
  def edit
    @index_page = IndexPage.find(params[:id])
  end

  # POST /index_pages
  # POST /index_pages.json
  def create
    @index_page = IndexPage.new(params[:index_page])

    respond_to do |format|
      if @index_page.save
        format.html { redirect_to @index_page, notice: 'Index page was successfully created.' }
        format.json { render json: @index_page, status: :created, location: @index_page }
      else
        format.html { render action: "new" }
        format.json { render json: @index_page.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /index_pages/1
  # PUT /index_pages/1.json
  def update
    @index_page = IndexPage.find(params[:id])

    respond_to do |format|
      if @index_page.update_attributes(params[:index_page])
        format.html { redirect_to @index_page, notice: 'Index page was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @index_page.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /index_pages/1
  # DELETE /index_pages/1.json
  def destroy
    @index_page = IndexPage.find(params[:id])
    @index_page.destroy

    respond_to do |format|
      format.html { redirect_to index_pages_url }
      format.json { head :no_content }
    end
  end
end
