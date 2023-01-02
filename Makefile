#!make

.PHONY: earth
earth:
	ignite chain serve -c earth.yml

.PHONY: mars
mars:
	ignite chain serve -c mars.yml

.PHONY: shutdown
shutdown:
	rm -fr ${HOME}/.earth
	rm -fr ${HOME}/.mars
	rm -fr ${HOME}/.ignite/relayer

.PHONY: relayer
relayer:
	ignite relayer connect

.PHONY: relayer-configure
relayer-configure:
	rm -fr ${HOME}/.ignite/relayer
	ignite relayer configure -a \
		--source-rpc "http://0.0.0.0:26657" \
		--source-faucet "http://0.0.0.0:4500" \
		--source-port "blog" \
		--source-version "blog-1" \
		--source-gasprice "0.000025stake" \
		--source-prefix "cosmos" \
		--source-gaslimit "300000" \
		--target-rpc "http://0.0.0.0:26659" \
		--target-faucet "http://0.0.0.0:4501" \
		--target-port "blog" \
		--target-version "blog-1" \
		--target-gasprice "0.000025stake" \
		--target-prefix "cosmos" \
		--target-gaslimit "300000"

.PHONY: build
build:
	cd ./cmd/planetd && go build main.go && mv main planetd


.PHONY: send-post-to-mars
send-post-to-mars:
	./cmd/planetd/planetd tx blog send-ibc-post blog channel-0 \
		"Hello Mars, I'm Alice from Earth" \
		"Hello Mars, I'm Alice from Earth" \
		--from alice \
		--chain-id earth \
		--home ${HOME}/.earth

.PHONY: list-mars-recv-post
list-mars-recv-post:
	./cmd/planetd/planetd q blog list-post --node tcp://localhost:26659

.PHONY: list-earth-sent-post
list-earth-sent-post:
	./cmd/planetd/planetd q blog list-sent-post

help:
	@grep -E '^[a-zA-Z_-]+:.*?' Makefile | cut -d: -f1 | sort
