ifndef REGISTRY
$(error REGISTRY is not set, REGISTRY=...)
endif
ifndef BUILD
$(error BUILD is not set, BUILD=r1)
endif
NAME   := ${REGISTRY}/condenser
TAG    := $$(git log -1 --pretty=%h)${BUILD}
IMG    := ${NAME}:${TAG}
LATEST := ${NAME}:latest

all: build push
	echo ${TAG}

build:
	docker build \
		--build-arg DMCA_USER_ENDPOINT=/blank \
		--build-arg DMCA_CONTENT_ENDPOINT=/blank \
		-t ${IMG} .
	docker tag ${IMG} ${LATEST}

push:
	docker push ${NAME}

login:
	docker log -u ${DOCKER_USER} -p ${DOCKER_PASS} ${DOCKER_REGISTRY}
