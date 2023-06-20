FROM python:3.9
WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
EXPOSE 5000

ENV MONGO_HOST="mongodb"
ENV MONGO_PORT=27017
ENV MONGO_INITDB_ROOT_PASSWORD="123"
CMD ["python", "app.py"]