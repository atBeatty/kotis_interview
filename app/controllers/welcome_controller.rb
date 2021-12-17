class WelcomeController < ApplicationController

  def index
    respond_to do |format|
      format.json { return head :no_content }
      format.any { render :index, layout: 'welcome_index' }
    end
  end
  def one
  end
  
  def task_one
  end

  def task_two
  end

end
