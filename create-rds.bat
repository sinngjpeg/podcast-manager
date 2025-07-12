@echo off
echo Criando RDS com configuracoes Free Tier...

aws rds create-db-instance ^
    --db-instance-identifier podcast-manager-db ^
    --db-instance-class db.t3.micro ^
    --engine mysql ^
    --engine-version 8.0.35 ^
    --master-username admin ^
    --master-user-password PodcastManager123! ^
    --allocated-storage 20 ^
    --storage-type gp2 ^
    --db-name podcast_db ^
    --backup-retention-period 7 ^
    --storage-encrypted ^
    --publicly-accessible ^
    --auto-minor-version-upgrade ^
    --deletion-protection false

echo.
echo RDS criado! Aguarde alguns minutos para ficar disponivel.
echo Endpoint sera: podcast-manager-db.xxxxxxxxx.us-east-1.rds.amazonaws.com
echo Usuario: admin
echo Senha: PodcastManager123!
echo Database: podcast_db