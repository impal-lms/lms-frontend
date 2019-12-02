TAG := $$( git rev-parse --short HEAD )
IMAGE := lms-frontend\:${TAG}

.PHONY: build-image run-image

build-image:
	@yarn install
	@docker build -f ./Dockerfile -t ${IMAGE} .

run-image:
	@docker run --name client -p 4000:4000 ${IMAGE}

restart-frontend:
	@docker-compose restart frontend
