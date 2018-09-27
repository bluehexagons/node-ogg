import OggDecoder from './lib/decoder'
import OggEncoder from './lib/encoder'
import OggPacket from './lib/packet'

declare namespace Ogg {
  export const ogg_packet = OggPacket
  export const packet = OggPacket
  export const Decoder = OggDecoder
  export const Encoder = OggEncoder
}

export = Ogg
