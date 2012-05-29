require 'rubygems'
require 'sinatra'
require 'sass'

get '/' do
  @home = true
  haml :index
end

get '/stylesheets/styles.css' do
  content_type 'text/css', :charset => 'utf-8'
  sass :styles
end
