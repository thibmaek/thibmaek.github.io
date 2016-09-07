FROM ruby:latest

MAINTAINER Thibault Maekelbergh <thibault.maekelbergh@icloud.com>

RUN mkdir -p /app
WORKDIR /app

COPY Gemfile Gemfile.lock ./
RUN gem install bundler && bundle install

COPY . ./

EXPOSE 4000

CMD ["bundle", "exec", "jekyll", "serve"]
