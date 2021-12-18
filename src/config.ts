export const config = {
    "avatar_cooldown": 300000,
    "status_cooldown": 600000,
    "error_color": "#ff0000",
    "success_color": "#00ff00",
    "emoji_discord_link": "https://cdn.discordapp.com/emojis/",
    "maus999_server_url": "https://maus999server.herokuapp.com/tracks",
    "emoji_extension": ".png",
    "ascII_file_name": "./ascII.txt",
    "administrator_permission": "ADMINISTRATOR",
    "about_prefix": "abt_",
    "describtion_prefix": "dsc_",
    "cron_regular": "0 0 * * *",
    "mous999_id": "453267651779887135",
    "avatar_channel_id": "885941024478883873",
    "owner_id": "473817390887600129",
    "support_server_id": "885941024478883870",
    "default": {
        "nickname": "emojis-bot",
        "prefix": "|",
        "emoji": null,
        "language": "eng",
        "doEmojis": false,
        "scan_limit": 100
    },
    "commands": {
        "imgToAscII": ["imgtoascii", "ita"],
        "setEmoji": ["setemoji"],
        "deleteEmoji": ["delemoji"],
        "setLanguage": ["setlang", "lang", "setlanguage"],
        "setPrefix": ["setprefix"],
        "doEmojis": ["doemojis"],
        "subscribe": ["subscribe", "sub"],
        "unsubscribe": ["unsubscribe", "unsub"],
        "clear": ["clear", "cls"],
        "help": ["help", "h"]
    },
    "events": {
        "ready": "ready",
        "message": "messageCreate",
        "guildCreate": "guildCreate",
        "guildDelete": "guildDelete"
    },
    "log": {
        "ready": "bot started"
    },
    "status": ["on ", " servers with ", " users"],
    "img_to_ascii_defaults": {
        "fit": "box",
        "width": 150,
        "height": 75,
        "color": false
    },
    "img_to_ascii_settings": {
        "width": "width:"
    },
    "database": {
        "collections": {
            "users": "users",
            "servers": "servers",
            "avatars": "avatars",
            "notifications": "notifications"
        },
        "default_values": [
            {
                "userID": "159985870458322944", //MEE6
                "emojiID": "872923821701726230",
                "language": "eng"
            },
            {
                "userID": "883020186339397693", //ME
                "emojiID": null,
                "language": "eng"
            },
            {
                "userID": "883051590959894538", //heys-bot
                "emojiID": "916962332930879569",
                "language": "end"
            }
        ]
    },
    "localization": {
        "eng": {
            "sub_lived": "Lived:",
            "sub_time": ["years", "months", "days"],
            "msg_imgToAscII_error": "Error while processing an image UwU",
            "msg_imgToAscII_no_files": "There are no files in your message ¯\\_(ツ)_/¯",
            "msg_imgToAscII_wrong_file": "File not found",
            "msg_imgToAscII_not_link": " - is not a link",
            "msg_clear_error": "What error could possibly happen while deleting messages???",
            "emd_help_author": "Some help:",
            "msg_doEmojis_on": "Emojis enabled!:white_check_mark:",
            "msg_doEmojis_off": "Emojist disabled!:negative_squared_cross_mark:",
            "msg_doEmojis_args_warn": "State on or off",
            "msg_doEmojis_access_warn": "This command is only avaliable for administrators :confused:",
            "msg_doEmojis_db_error": "We have some troubles with data base",
            "msg_setPrefix_success": "New prefix: ",
            "msg_setPrefix_access_warn": "This command is only avaliable for administrators :confused:",
            "msg_setPrefix_empty_warn": "Prefix can't be empty",
            "msg_setPrefix_db_error": "We have some troubles with data base",
            "msg_deleteEmoji_success": "Reaction deleted",
            "msg_deleteEmoji_db_error": "We have some troubles with data base",
            "msg_setEmoji_updated": "Reaction Updated",
            "msg_setEmoji_error": "Wrong emoji >:(",
            "msg_setEmoji_db_error": "We have some troubles with data base",
            "msg_setEmoji_same_emoji": "You aleready have this emoji. May be emoji function turned off on this server?",
            "msg_setLanguage_success": "Ok masta, my new language: ",
            "msg_setLanguage_warn": "Bot isn't translated to this language (yet?)",
            "msg_setLanguage_empty": "Empty language?",
            "msg_setLanguage_db_error": "We have some troubles with data base",
            "msg_subscribe_date_error": "Wrong date",
            "msg_subscribe_duration_error": "Wrong life duration ^_^",
            "msg_subscribe_send_success": "Subscribed",
            "msg_subscribe_existing_user": "You are already subscribed. To change the data, unsubscribe and subscribe again.",
            "msg_unsubscribe_not_subbed": "You wasn't subbed anyway",
            "msg_unsubscribe_success": "Unsubscribed",
            "abt_setlang": "Set language [rus, eng]",
            "abt_setemoji": "Chose the message reaction",
            "abt_delemoji": "Remove the message reaction",
            "abt_doemojis": "Enable and disable bot reactions on the server (admins only)",
            "abt_setprefix": "Set prefix, I suppose",
            "abt_imgtoascii": "Convert an image to the text file",
            "abt_subscribe": "Counts how long are you going to live",
            "abt_unsubscribe": "Unsubscribe from daily notifications",
            "abt_addtrack": "Not for common users",
            "abt_clear": "Deletes bot messages from this channel",
            "abt_help": "Help",
            "dsc_setlang": "We'll have more languages in future",
            "dsc_setemoji": "State emoji after command. You can use default emojis and emojis from servers with this bot",
            "dsc_delemoji": "Delete reaction under your message",
            "dsc_doemojis": "on - switch on, off - switch off",
            "dsc_setprefix": "p.s. only for admins",
            "dsc_imgtoascii": "Convert image to ascII text",
            "dsc_subscribe": "I will every day notify you, how much days you have till the end",
            "dsc_unsubscribe": "why? ¯\\_(ツ)_/¯",
            "dsc_addtrack": "Adds track to database (special for maus999)",
            "dsc_clear": "You can state amount of messages to delete",
            "dsc_help": "Shows this message"
        },
        "rus": {
            "sub_lived": "Прожито:",
            "sub_time": ["года", "месяцев", "дней"],
            "msg_clear_error": "Какая ошибка могла случится во время удаления сообщений?",
            "msg_imgToAscII_error": "Не удалось сохранить файл UwU",
            "msg_imgToAscII_no_files": "В сообщении нет вложений ¯\\_(ツ)_/¯",
            "msg_imgToAscII_wrong_file": "Файл не найден",
            "msg_imgToAscII_not_link": " - не ссылка",
            "emd_help_author": "Список команд:",
            "msg_doEmojis_on": "Эмодзи включены!:white_check_mark:",
            "msg_doEmojis_off": "Эмодзи выключены!:negative_squared_cross_mark:",
            "msg_doEmojis_args_warn": "Передайте on или off",
            "msg_doEmojis_access_warn": "Эта команда доступна только администраторам :confused:",
            "msg_doEmojis_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_setPrefix_success": "Новый префикс: ",
            "msg_setPrefix_access_warn": "Эта команда доступна только администраторам :confused:",
            "msg_setPrefix_empty_warn": "Префикс не может быть пустым",
            "msg_setPrefix_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_deleteEmoji_success": "Реакция удалена",
            "msg_deleteEmoji_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_setEmoji_updated": "Reaction Updated",
            "msg_setEmoji_error": "Это не эмодзи >:(",
            "msg_setEmoji_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_setEmoji_same_emoji": "Эта реакция уже установлена. Может быть эмоджи выключены на этом сервере?",
            "msg_setLanguage_success": "Ок, мой новый язык: ",
            "msg_setLanguage_warn": "Бот ещё не переведён на этот язык :sob:",
            "msg_setLanguage_empty": "Пустой язык?",
            "msg_setLanguage_db_error": "Произошла ошибка при записи в базу данных! Попробуйте снова",
            "msg_subscribe_date_error": "Неверная дата рождения",
            "msg_subscribe_duration_error": "Неверная продолжительность жизни ^_^",
            "msg_subscribe_send_success": "Подписка оформлена",
            "msg_subscribe_existing_user": "Вы уже подписаны, для изменения данных отпишитесь и подпишитесь снова.",
            "msg_unsubscribe_not_subbed": "Вы и так не подписаны",
            "msg_unsubscribe_success": "Вы отписаны",
            "abt_setlang": "Устаноаить язык [rus, eng]",
            "abt_setemoji": "Выберите реакцию под сообщением",
            "abt_delemoji": "Убрать реакцию под сообщениями",
            "abt_doemojis": "Включить и выключить реакции от бота на сервере",
            "abt_setprefix": "Изменить префикс на сервере",
            "abt_imgtoascii": "Конвертировать картинку в текстовый файл",
            "abt_subscribe": "Считает сколько вам осталось",
            "abt_unsubscribe": "Отписаться от ежедневной рассылки",
            "abt_addtrack": "Команда не для среднестатистического пользователя",
            "abt_clear": "Удаляет сообщения бота из этого канала",
            "abt_help": "Помощь",
            "dsc_setlang": "В аргументе код языка, в будующем бот будет переводиться на большее количество языков.",
            "dsc_setemoji": "Напишите команду и через пробел эмоджи для реакции под сообщением (если функция включена на сервере). Можно использовать дефолтные и эмоджи с серверов, на которых есть этот бот",
            "dsc_delemoji": "Убрать реакцию под сообщениями",
            "dsc_doemojis": "on - вкл. off - выкл.",
            "dsc_setprefix": "Такое могут только админы",
            "dsc_imgtoascii": "Конвертировать картинку в текстовый файл",
            "dsc_subscribe": "Ежедневный счётчик, показывающий сколько вам осталось",
            "dsc_unsubscribe": "Зачем? ¯\\_(ツ)_/¯",
            "dsc_addtrack": "Добавить трек в базу данных (специально для maus999)",
            "dsc_clear": "Можно указать количество сообщений, которое нужно удалить",
            "dsc_help": "Показывает это сообщение"
        }
    }
};