# Use the Debian-based Python image
FROM python:3.8-slim

# Set working directory
WORKDIR /app

# Copy application files
COPY . /app

# Install dependencies for mysqlclient, psutil, and Pillow
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
        libmariadb-dev \
        build-essential \
        libjpeg-dev \
        zlib1g-dev \
        libfreetype6-dev \
        liblcms2-dev \
        libopenjp2-7-dev \
        libtiff-dev \
        tk-dev \
        libharfbuzz-dev \
        libfribidi-dev && \
    pip install --no-cache-dir -r requirements.txt -i https://pypi.org/simple && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Expose the application port
EXPOSE 7000

# Command to run the application
CMD ["python", "./main.py"]
