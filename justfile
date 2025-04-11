default:
    just --list

cexport:
    packwiz curseforge export

mexprort:
    packwiz mr export

deploy:
    rsync \
    --filter='- *.zip' \
    --filter='- *.mrpack' \
    --filter='- .git*' \
    --filter='- .probe' \
    --filter='- .packwizignore' \
    --compress \
    --delete \
    --progress \
    --recursive \
    --mkpath \
    ./ gabe@cirrostratus:/storage/static/minecraft/less-than-compact-2/
