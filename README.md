# Containerized Full-Stack Example

This is a bare-bones example of how to structure and set up the docker files for a full-stack web application.
I modified this [tutorial](https://dev.to/fizy_hector/-containerizing-your-full-stack-node-app-using-docker-compose-4lnk), changing the frontend to Next.Js and changing the backend from Express in Node.js to FastAPI in Python.

## Build the container image

Install Docker Desktop, which should also install the `docker` CLI on your system.

To install and start the whole container (backend and frontend), use `docker`.

```console
$ docker compose up --build
[+] Running 0/0
[+] Running 0/2end   Building                                0.1s
 ⠙ Service backend   Building                                0.2s
[+] Building 160.8s (22/22) FINISHED                         docker:desktop-linux
```

## Run the contaiers

The easiest way to manage running and stopping the containers is with Docker Desktop.

![Screenshot of Docker Desktop and this project's container, with its two services, "client" and "server."](./img/docker-desktop-containers.png)

## Develop the components

When developping the project, run the frontend and backend separately in their respective runtime environments.

### Backend

In a virtual Python environment, with the Python dependencies installed, run the command that's in the docker file.

```shell
fastapi run app/main.py --port 8000
```

See the [README](./backend/README.md).

### Frontend

Having already installed the node modules, run the command that's in the docker file.

```shell
npm run dev
```

See the [README](./frontend/README.md).
