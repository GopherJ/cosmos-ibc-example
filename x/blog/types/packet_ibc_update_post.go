package types

// ValidateBasic is used for validating the packet
func (p IbcUpdatePostPacketData) ValidateBasic() error {

	// TODO: Validate the packet data

	return nil
}

// GetBytes is a helper for serialising
func (p IbcUpdatePostPacketData) GetBytes() ([]byte, error) {
	var modulePacket BlogPacketData

	modulePacket.Packet = &BlogPacketData_IbcUpdatePostPacket{&p}

	return modulePacket.Marshal()
}
