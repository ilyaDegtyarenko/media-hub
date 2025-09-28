export type Channel = {
  id: number
  name: string
  available: boolean
  colour: string
  icon_url: string
  icon_v2_url: string
  [key: string]: any
}

export type GetChannelsResponse = {
  status: string
  list: Channel[]
  [key: string]: any
}

export type OpenChannelStreamResponse = {
  stream_id: number
  url: string
  [key: string]: any
}

export type Movie = {
  id: number
  title: string
  tagline: string
  year: number
  rating_imdb: number
  rating_sweet_tv: number
  trailer_url: string
  banner_url: string
  poster_url: string
  availability_info_color: string
  age_limit: number
  scores: {
    provider: string
    rating_count: number
    value: number
  }
  [key: string]: any
}

export type GetMoviesResponse = {
  movies: Movie[]
  [key: string]: any
}
