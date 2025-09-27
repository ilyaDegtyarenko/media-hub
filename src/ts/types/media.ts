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
