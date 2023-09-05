export const TweetView = (args) => {
  return (
    <div>
      <p>
        {args.tweet.time} <br /> {args.tweet.body}
      </p>
    </div>
  );
};
