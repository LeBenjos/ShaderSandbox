.PHONY: dev

install:
	@echo "Install frontend..."
	cd frontend && npm i &
	@echo "Install backend dependence"
	cd backend && npm i

dev:
	@echo "Starting frontend..."
	cd frontend && npm run dev &
	@echo "Starting backend..."
	cd backend && npm run server