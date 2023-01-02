package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSendIbcUpdatePost = "send_ibc_update_post"

var _ sdk.Msg = &MsgSendIbcUpdatePost{}

func NewMsgSendIbcUpdatePost(
	creator string,
	port string,
	channelID string,
	timeoutTimestamp uint64,
	postID string,
	title string,
	content string,
) *MsgSendIbcUpdatePost {
	return &MsgSendIbcUpdatePost{
		Creator:          creator,
		Port:             port,
		ChannelID:        channelID,
		TimeoutTimestamp: timeoutTimestamp,
		PostID:           postID,
		Title:            title,
		Content:          content,
	}
}

func (msg *MsgSendIbcUpdatePost) Route() string {
	return RouterKey
}

func (msg *MsgSendIbcUpdatePost) Type() string {
	return TypeMsgSendIbcUpdatePost
}

func (msg *MsgSendIbcUpdatePost) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSendIbcUpdatePost) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSendIbcUpdatePost) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	if msg.Port == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet port")
	}
	if msg.ChannelID == "" {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet channel")
	}
	if msg.TimeoutTimestamp == 0 {
		return sdkerrors.Wrap(sdkerrors.ErrInvalidRequest, "invalid packet timeout")
	}
	return nil
}
