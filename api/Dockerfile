FROM python:3.7.4-buster

RUN pip install -U setuptools pip && \
    pip install python-slugify motor sanic sanic-jinja2 pyJWT aiosmtplib dataclasses-jsonschema elasticsearch-async
# RUN pip install git+https://github.com/Garito/dataclasses-jsonschema.git

# RUN pip install pytest Faker pytest-cov

RUN pip install git+https://github.com/Garito/python-yrest.git
# COPY ./python-yrest/ /usr/src/python-yrest/
# RUN pip install -e /usr/src/python-yrest

RUN adduser --disabled-password --gecos '' appuser
USER appuser

WORKDIR /usr/src/app

COPY ./api/ /usr/src/app/

CMD [ "python", "app.py" ]
