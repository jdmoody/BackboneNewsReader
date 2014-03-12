class FeedsController < ApplicationController
  def show
    @feed = Feed.find(params[:id])
    @feed.reload
    respond_to do |format|

      format.html { render :index }
      # format.json { render :json => { @feed => @feed.entries }}
      format.json { render :json => @feed, :include => :entries }
    end
  end

  def index
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => Feed.all, :include => :entries }
    end
  end

  def create
    feed = Feed.find_or_create_by_url(feed_params[:url])
    if feed
      render :json => feed
    else
      render :json => { error: "invalid url" }, status: :unprocessable_entity
    end
  end

  private
  def feed_params
    params.require(:feed).permit(:title, :url)
  end
end
