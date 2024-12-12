#!/bin/bash
SHELL_FOLDER=$(cd $(dirname $0);pwd)

LOG_INFO() {
    content=${1}
    echo -e "\033[32m[INFO] ${content}\033[0m"
}

cd ${SHELL_FOLDER}

LOG_INFO "Stop docker: ${WEDPR_DOCKER_NAME}"
docker stop ${WEDPR_DOCKER_NAME}
LOG_INFO "Stop docker: ${WEDPR_DOCKER_NAME} success"