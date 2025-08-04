# Docker Deployment Guide for Harshala's Portfolio

## 🐳 Docker Setup

This guide will help you deploy Harshala's portfolio using Docker containers.

## 📋 Prerequisites

- Docker installed on your system
- Docker Compose installed
- Git (to clone the repository)

## 🚀 Quick Start

### 1. Build and Run Production Version

```bash
# Build and start the production container
docker-compose up -d

# Access the portfolio at: http://localhost:3000
```

### 2. Development Mode (with hot reload)

```bash
# Build and start the development container
docker-compose --profile dev up -d

# Access the development server at: http://localhost:3001
```

## 🔧 Manual Docker Commands

### Production Build

```bash
# Build the production image
docker build -t harshala-portfolio:latest .

# Run the container
docker run -d -p 3000:80 --name portfolio harshala-portfolio:latest

# Access at: http://localhost:3000
```

### Development Build

```bash
# Build the development image
docker build -f Dockerfile.dev -t harshala-portfolio:dev .

# Run the development container
docker run -d -p 3001:3000 -v $(pwd):/app --name portfolio-dev harshala-portfolio:dev

# Access at: http://localhost:3001
```

## 📁 File Structure

```
Portfolio/
├── Dockerfile              # Production Dockerfile
├── Dockerfile.dev          # Development Dockerfile
├── docker-compose.yml      # Docker Compose configuration
├── nginx.conf             # Nginx configuration
├── .dockerignore          # Files to exclude from Docker build
└── DOCKER_DEPLOYMENT.md   # This file
```

## 🌐 Production Deployment

### Using Docker Compose (Recommended)

```bash
# Start production service
docker-compose up -d

# View logs
docker-compose logs -f portfolio

# Stop service
docker-compose down
```

### Using Docker Swarm

```bash
# Initialize swarm (if not already done)
docker swarm init

# Deploy the stack
docker stack deploy -c docker-compose.yml portfolio

# List services
docker service ls

# Remove stack
docker stack rm portfolio
```

## 🔍 Monitoring and Health Checks

The application includes health checks:

```bash
# Check container health
docker ps

# View health check logs
docker inspect harshala-portfolio | grep -A 10 Health

# Manual health check
curl http://localhost:3000/health
```

## 📊 Performance Features

- **Multi-stage build**: Optimized image size
- **Nginx**: High-performance web server
- **Gzip compression**: Faster loading
- **Caching**: Static assets cached for 1 year
- **Security headers**: XSS protection, content security policy

## 🔒 Security Features

- Security headers configured in nginx
- Non-root user in production
- Minimal attack surface with Alpine Linux
- Content Security Policy headers

## 🛠️ Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Check what's using the port
   lsof -i :3000
   
   # Use a different port
   docker run -d -p 3001:80 harshala-portfolio:latest
   ```

2. **Build fails**
   ```bash
   # Clean Docker cache
   docker system prune -a
   
   # Rebuild without cache
   docker build --no-cache -t harshala-portfolio:latest .
   ```

3. **Container won't start**
   ```bash
   # Check logs
   docker logs harshala-portfolio
   
   # Check container status
   docker ps -a
   ```

### Logs and Debugging

```bash
# View container logs
docker logs harshala-portfolio

# Follow logs in real-time
docker logs -f harshala-portfolio

# Execute commands in running container
docker exec -it harshala-portfolio sh

# View nginx logs
docker exec harshala-portfolio cat /var/log/nginx/access.log
```

## 🔄 Updates and Maintenance

### Update the Application

```bash
# Pull latest changes
git pull origin main

# Rebuild and restart
docker-compose down
docker-compose up -d --build
```

### Backup and Restore

```bash
# Create backup of container
docker commit harshala-portfolio harshala-portfolio:backup

# Save image to file
docker save harshala-portfolio:backup > portfolio-backup.tar

# Load image from file
docker load < portfolio-backup.tar
```

## 🌍 Environment Variables

The application supports the following environment variables:

- `NODE_ENV`: Set to `production` for production builds
- `PORT`: Port for the development server (default: 3000)

## 📈 Scaling

### Horizontal Scaling

```bash
# Scale the service (Docker Swarm)
docker service scale portfolio_portfolio=3

# Load balancer configuration
# Add a reverse proxy like Traefik or HAProxy
```

## 🎯 Best Practices

1. **Always use specific image tags** instead of `latest`
2. **Regular security updates** of base images
3. **Monitor resource usage** with `docker stats`
4. **Use health checks** for production deployments
5. **Backup regularly** before major updates
6. **Use Docker secrets** for sensitive data in production

## 📞 Support

For issues or questions:
- Check the troubleshooting section above
- Review Docker and nginx logs
- Ensure all prerequisites are installed
- Verify network connectivity and firewall settings

---

**Happy Deploying! 🚀** 