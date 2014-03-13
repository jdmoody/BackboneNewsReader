class EntriesController < ApplicationController
  def show
    entry = Entry.find(params[:id])
    render :json => entry
  end

  def index
    feed = Feed.find(params[:feed_id])
    # feed.updated_at < 2.minutes.ago, feed.reload
    render :json => feed.entries
  end

  private
  def entry_params
    params.require(:entry).permit(:guid, :link, :published_at, :title, :json, :feed_id)
  end
end
